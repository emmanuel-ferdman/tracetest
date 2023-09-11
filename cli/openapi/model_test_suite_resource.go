/*
TraceTest

OpenAPI definition for TraceTest endpoint and resources

API version: 0.2.1
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the TestSuiteResource type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TestSuiteResource{}

// TestSuiteResource Represents a TestSuite structured into the Resources format.
type TestSuiteResource struct {
	// Represents the type of this resource. It should always be set as 'TestSuite'.
	Type *string    `json:"type,omitempty"`
	Spec *TestSuite `json:"spec,omitempty"`
}

// NewTestSuiteResource instantiates a new TestSuiteResource object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTestSuiteResource() *TestSuiteResource {
	this := TestSuiteResource{}
	return &this
}

// NewTestSuiteResourceWithDefaults instantiates a new TestSuiteResource object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTestSuiteResourceWithDefaults() *TestSuiteResource {
	this := TestSuiteResource{}
	return &this
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TestSuiteResource) GetType() string {
	if o == nil || isNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestSuiteResource) GetTypeOk() (*string, bool) {
	if o == nil || isNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TestSuiteResource) HasType() bool {
	if o != nil && !isNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *TestSuiteResource) SetType(v string) {
	o.Type = &v
}

// GetSpec returns the Spec field value if set, zero value otherwise.
func (o *TestSuiteResource) GetSpec() TestSuite {
	if o == nil || isNil(o.Spec) {
		var ret TestSuite
		return ret
	}
	return *o.Spec
}

// GetSpecOk returns a tuple with the Spec field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TestSuiteResource) GetSpecOk() (*TestSuite, bool) {
	if o == nil || isNil(o.Spec) {
		return nil, false
	}
	return o.Spec, true
}

// HasSpec returns a boolean if a field has been set.
func (o *TestSuiteResource) HasSpec() bool {
	if o != nil && !isNil(o.Spec) {
		return true
	}

	return false
}

// SetSpec gets a reference to the given TestSuite and assigns it to the Spec field.
func (o *TestSuiteResource) SetSpec(v TestSuite) {
	o.Spec = &v
}

func (o TestSuiteResource) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TestSuiteResource) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !isNil(o.Spec) {
		toSerialize["spec"] = o.Spec
	}
	return toSerialize, nil
}

type NullableTestSuiteResource struct {
	value *TestSuiteResource
	isSet bool
}

func (v NullableTestSuiteResource) Get() *TestSuiteResource {
	return v.value
}

func (v *NullableTestSuiteResource) Set(val *TestSuiteResource) {
	v.value = val
	v.isSet = true
}

func (v NullableTestSuiteResource) IsSet() bool {
	return v.isSet
}

func (v *NullableTestSuiteResource) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTestSuiteResource(val *TestSuiteResource) *NullableTestSuiteResource {
	return &NullableTestSuiteResource{value: val, isSet: true}
}

func (v NullableTestSuiteResource) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTestSuiteResource) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}