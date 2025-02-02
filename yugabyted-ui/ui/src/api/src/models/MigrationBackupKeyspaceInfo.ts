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




/**
 * Migration backup keyspace info
 * @export
 * @interface MigrationBackupKeyspaceInfo
 */
export interface MigrationBackupKeyspaceInfo  {
  /**
   * Type of the table
   * @type {string}
   * @memberof MigrationBackupKeyspaceInfo
   */
  table_type?: string;
  /**
   * Name of the keyspace
   * @type {string}
   * @memberof MigrationBackupKeyspaceInfo
   */
  keyspace?: string;
  /**
   * Location of the keyspace
   * @type {string}
   * @memberof MigrationBackupKeyspaceInfo
   */
  location?: string;
}



