import {PlanType} from './plan-type';

/**
 * Represents all information which is included in the plan.
 *
 * @param planType represents the type of plan which the user has.
 * @param expires represents ms since epoch time (UTC) when the plan expires.
 */
export interface Plan {
  planType: PlanType;
  expires: number;
}
