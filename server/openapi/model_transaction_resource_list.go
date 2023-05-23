/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type TransactionResourceList struct {
	Count int32 `json:"count,omitempty"`

	Items []TransactionResource `json:"items,omitempty"`
}

// AssertTransactionResourceListRequired checks if the required fields are not zero-ed
func AssertTransactionResourceListRequired(obj TransactionResourceList) error {
	for _, el := range obj.Items {
		if err := AssertTransactionResourceRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertRecurseTransactionResourceListRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of TransactionResourceList (e.g. [][]TransactionResourceList), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseTransactionResourceListRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aTransactionResourceList, ok := obj.(TransactionResourceList)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertTransactionResourceListRequired(aTransactionResourceList)
	})
}