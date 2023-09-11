# Test Suites

Most End-to-End tests are not simple to run. They require some setup before the actual test is run. Actions like creating a new user, removing all items from a cart, etc. It is important that you can execute multiple steps as part of your Test Suite. Tracetest introduces the concept of **Test Suites** to achieve this goal.

## What is a Test Suite?
A Test Suite is defined as a group of steps that are executed in the defined order and can access information exported by previous step executions. Each step is a test.

## Chaining Tests
The main benefit of using Test Suites is to chain tests together and use values obtained from a test in a subsequent test.

### How Values are Shared by Tests
When a Test Suite is run, a context object is created with information about that specific run. One of those pieces of information is a `variable set` object, which is empty by default. If the Test Suite is run when referencing an [variable set](./variable-sets.md), all values from the selected variable sets will be copied to the `variable set` object.

When a test is executed within a Test Suite, if it generates any outputs, its outputs will be injected into the Test Suite context variable set object. After the outputs are injected, all subsequent tests to be run within the Test Suite will be able to reference those values.

> :information_source: Outputs generated by steps don't modify the selected [variable set](./variable-sets.md). It only modifies the Test Suite run context object.

Consider you have 3 tests within a Test Suite: A, B, and C. Tests A and B generate outputs called A_OUTPUT and B_OUTPUT, respectively. When running the Test Suite, we provide a variable set which contains a `HOST` variable. The execution of test A would only be able to reference `var:HOST`. B would be able to reference `var:HOST`, and `var:A_OUTPUT`. While C would be able to reference all three variables: `var:HOST`, `var:A_OUTPUT`, `var:B_OUTPUT`.

> :information_source: A single test can contain as many outputs as you like.

### Exposing Values from a Test to Other Tests
Since version v0.8, Tracetest allows tests to declare `outputs`. An output is a value that is extracted from a trace by providing a [selector](./selectors) to choose which spans to use to get the information from, and an [expression](./expressions) to get the value from the selected spans. For example, consider that you want to expose the time a specific job was taken from a queue and began executing. An output would look something like the following:

```yaml
outputs:
    - name: TIME_CANCEL_SUBSCRIPTION_MESSAGE_OBTAINED
      selector: span[name = "Process request from cancel subscription queue"]
      expression: attr:tracetest.time.start
```

This would create an output called `TIME_CANCEL_SUBSCRIPTION_MESSAGE_OBTAINED` that is obtained by reading the attribute `tracetest.time.start` from the span with `name` equal to `Process request from cancel subscription queue`. This value would then be injected into the variables of that Test Suite to be accessed by other tests within the same Test Suite run.

### Test Suites Execution Flow

Test Suite steps are executed sequentially. A next step is only executed after the previous step finishes executing successfully. A successful step is one which managed to trigger an operation and received a trace back from the data store. Failing assertions do not stop a Test Suite from executing the next steps.

Examples:

### Test Suite where one step didn't get executed:

* Step 1 (Finished)
* Step 2 (Failed to fetch trace)
* Step 3 (not executed)

Result: **FAILED**

### Test Suite where all steps were executed, but the assertions failed:
* Step 1 (Finished)
* Step 2 (Finished)
* Step 3 (Failed assertions)

Result: **FAILED**

### Test Suite where all steps succeeded:
* Step 1 (Finished)
* Step 2 (Finished)
* Step 3 (Finished)

Result: **FINISHED**