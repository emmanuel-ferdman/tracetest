/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type TraceidResponse struct {
	Id string `json:"id,omitempty"`
}

// AssertTraceidResponseRequired checks if the required fields are not zero-ed
func AssertTraceidResponseRequired(obj TraceidResponse) error {
	return nil
}

// AssertRecurseTraceidResponseRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of TraceidResponse (e.g. [][]TraceidResponse), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseTraceidResponseRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aTraceidResponse, ok := obj.(TraceidResponse)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertTraceidResponseRequired(aTraceidResponse)
	})
}
