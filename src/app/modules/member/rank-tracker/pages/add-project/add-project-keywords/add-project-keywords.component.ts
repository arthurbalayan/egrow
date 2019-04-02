import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {KeywordsInputPipe} from './keywords-input.pipe';
import {AddProjectService} from '../add-project.service';
import {AddProjectKeywordsService} from './add-project-keywords.service';
import {AdvancedErrorStateMatcher} from '../../../../../../shared/classes/advanced-error-state-matcher';
import {AbstractStateComponent} from '../../../../../../shared/components/member/abstract-state/abstract-state.component';
import {AbstractStateService} from '../../../../../../shared/components/member/abstract-state/abstract-state.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';3
import {map} from 'rxjs/operators'

const MAX_KEYWORDS = 30;

/**
 * This component handles the addition of keywords to a rank tracker project.
 * It represents the second state of two states in the process. The next state
 * is the submission of the entered keywords and the entire project to the database.
 */
@Component({
  selector: 'app-add-project-keywords',
  templateUrl: './add-project-keywords.component.html',
  styleUrls: ['./add-project-keywords.component.css'],
  providers: [AddProjectKeywordsService, KeywordsInputPipe]
})
export class AddProjectKeywordsComponent extends AbstractStateComponent implements OnInit {

  numberKeywords = 0;
  projectId$: Observable<string>;
  /**
   * This FormControl validates whether too many keywords are entered and whether
   * keywords at all were entered.
   */
  public keywordsFormControl: FormControl;
  public matcher: ErrorStateMatcher;

  public readonly maxKeywords: number = MAX_KEYWORDS;

  constructor(private projectService: AddProjectService,
              projectState: AbstractStateService,
              private service: AddProjectKeywordsService,
              private keywordsPipe: KeywordsInputPipe,
              private activatedRoute: ActivatedRoute) {
    super(projectState, 1);
    this.keywordsFormControl = new FormControl('', [Validators.required, KeywordNumberValidator]);
    this.matcher = new AdvancedErrorStateMatcher();
  }

  ngOnInit() {

    // Sets the keywords when just the keywords are added via 'Add Keywords' on the project page.
    this.service.getData().subscribe(keywords => {
      if (null != keywords && 0 < keywords.length) {
        this.keywordsFormControl.setValue(keywords.join(', '));
      }
    });

    // Enables the next state (Submission) when the FormControl is valid
    this.keywordsFormControl.statusChanges.subscribe((status: string) => {
      if ('VALID' === status) {
        this.projectState.enableState(this.getNextStateIndex());
      } else {
        this.projectState.disableState(this.getNextStateIndex());
      }
    });

    // Determines the number of keywords whenever the input is changing
    this.keywordsFormControl.valueChanges.subscribe((inputString: string) => {
      this.numberKeywords = this.keywordsPipe.transform(inputString).split(',').length;
    });

    // Gets the id of project
    this.projectId$ = this.activatedRoute.params.pipe(
      map(params => params['projectId'])
    )
  }

  submitState(): void {
    const formattedKeywords = this.keywordsPipe.transform(this.keywordsFormControl.value);
    this.projectService.setKeywords(formattedKeywords.split(','));
    this.projectService.addProject();
  }
}

/**
 * Validates the number of keywords so it is not bigger than MAX_KEYWORDS.
 * @param control is the form of the input field.
 * @constructor
 */
export function KeywordNumberValidator(control: AbstractControl): ValidationErrors | null  {

  const numKeywords = KeywordsInputPipe.getNumKeywords((<string>control.value));
  let errors = <ValidationErrors>{};

  if (MAX_KEYWORDS < numKeywords) {
    errors = {tooManyKeywords: true};
  }

  return errors;
}
