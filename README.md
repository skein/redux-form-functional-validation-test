# Test for redux form composible validation

## Install

```
npm i
```

## Goal

The goal is to to use a composable way of handeling erros in redux form, instead of relying on ifelse statements.

The projext contains validators and validator Collections

validators are simple functions that return either a Left or a Right for a specific validation such as isEmail and meant to be field independant.

validation collections are more field specific and are a composition of validators.