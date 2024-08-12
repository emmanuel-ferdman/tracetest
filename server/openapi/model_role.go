/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type Role string

// List of Role
const (
	OWNERS    Role = "owners"
	MEMBERS   Role = "members"
	ADMINS    Role = "admins"
	BILLERS   Role = "billers"
	ENGINEERS Role = "engineers"
	RUNNERS   Role = "runners"
	AGENT     Role = "agent"
)

// AssertRoleRequired checks if the required fields are not zero-ed
func AssertRoleRequired(obj Role) error {
	return nil
}

// AssertRecurseRoleRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of Role (e.g. [][]Role), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseRoleRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aRole, ok := obj.(Role)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertRoleRequired(aRole)
	})
}