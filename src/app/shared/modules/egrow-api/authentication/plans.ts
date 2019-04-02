import {PlanType} from './plan-type';
import {AuthorityEntry} from './decoded-jwt-token';

/**
 * Acts as a provider for plan types based on the auth of the jwt token
 * provided by the authentication response.
 */
export class Plans {

  public static getType(auth: AuthorityEntry[]): PlanType {

    let planType: PlanType;

    if (0 === auth.length) {
      planType = PlanType.NOT_ASSIGNED;
    } else {

      const entry: AuthorityEntry = auth[0];

      switch (entry.authority) {
        case 'PLAN_FREE':
          planType = PlanType.FREE;
          break;
        case 'PLAN_STANDARD':
          planType = PlanType.STANDARD;
          break;
        case 'PLAN_PLUS':
          planType = PlanType.PLUS;
          break;
        default:
          planType = PlanType.NOT_ASSIGNED;
      }
    }

    return planType;
  }
}
