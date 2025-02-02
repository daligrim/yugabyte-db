// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ClusterInstantMetricsData } from './ClusterInstantMetricsData';


/**
 * Cluster instant metrics
 * @export
 * @interface ClusterInstantMetrics
 */
export interface ClusterInstantMetrics  {
  /**
   * 
   * @type {string}
   * @memberof ClusterInstantMetrics
   */
  cluster_id: string;
  /**
   * 
   * @type {ClusterInstantMetricsData}
   * @memberof ClusterInstantMetrics
   */
  metrics: ClusterInstantMetricsData;
}



