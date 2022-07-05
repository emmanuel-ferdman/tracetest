/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type ExportedTestInformation struct {
	Test Test `json:"test"`

	Run TestRun `json:"run"`
}

// AssertExportedTestInformationRequired checks if the required fields are not zero-ed
func AssertExportedTestInformationRequired(obj ExportedTestInformation) error {
	elements := map[string]interface{}{
		"test": obj.Test,
		"run":  obj.Run,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	if err := AssertTestRequired(obj.Test); err != nil {
		return err
	}
	if err := AssertTestRunRequired(obj.Run); err != nil {
		return err
	}
	return nil
}

// AssertRecurseExportedTestInformationRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of ExportedTestInformation (e.g. [][]ExportedTestInformation), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseExportedTestInformationRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aExportedTestInformation, ok := obj.(ExportedTestInformation)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertExportedTestInformationRequired(aExportedTestInformation)
	})
}