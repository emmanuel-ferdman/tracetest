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

// checks if the EnvironmentResourceList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EnvironmentResourceList{}

// EnvironmentResourceList struct for EnvironmentResourceList
type EnvironmentResourceList struct {
	Count *int32                `json:"count,omitempty"`
	Items []EnvironmentResource `json:"items,omitempty"`
}

// NewEnvironmentResourceList instantiates a new EnvironmentResourceList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnvironmentResourceList() *EnvironmentResourceList {
	this := EnvironmentResourceList{}
	return &this
}

// NewEnvironmentResourceListWithDefaults instantiates a new EnvironmentResourceList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnvironmentResourceListWithDefaults() *EnvironmentResourceList {
	this := EnvironmentResourceList{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *EnvironmentResourceList) GetCount() int32 {
	if o == nil || isNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentResourceList) GetCountOk() (*int32, bool) {
	if o == nil || isNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *EnvironmentResourceList) HasCount() bool {
	if o != nil && !isNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *EnvironmentResourceList) SetCount(v int32) {
	o.Count = &v
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *EnvironmentResourceList) GetItems() []EnvironmentResource {
	if o == nil || isNil(o.Items) {
		var ret []EnvironmentResource
		return ret
	}
	return o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentResourceList) GetItemsOk() ([]EnvironmentResource, bool) {
	if o == nil || isNil(o.Items) {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *EnvironmentResourceList) HasItems() bool {
	if o != nil && !isNil(o.Items) {
		return true
	}

	return false
}

// SetItems gets a reference to the given []EnvironmentResource and assigns it to the Items field.
func (o *EnvironmentResourceList) SetItems(v []EnvironmentResource) {
	o.Items = v
}

func (o EnvironmentResourceList) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EnvironmentResourceList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !isNil(o.Items) {
		toSerialize["items"] = o.Items
	}
	return toSerialize, nil
}

type NullableEnvironmentResourceList struct {
	value *EnvironmentResourceList
	isSet bool
}

func (v NullableEnvironmentResourceList) Get() *EnvironmentResourceList {
	return v.value
}

func (v *NullableEnvironmentResourceList) Set(val *EnvironmentResourceList) {
	v.value = val
	v.isSet = true
}

func (v NullableEnvironmentResourceList) IsSet() bool {
	return v.isSet
}

func (v *NullableEnvironmentResourceList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnvironmentResourceList(val *EnvironmentResourceList) *NullableEnvironmentResourceList {
	return &NullableEnvironmentResourceList{value: val, isSet: true}
}

func (v NullableEnvironmentResourceList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnvironmentResourceList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}