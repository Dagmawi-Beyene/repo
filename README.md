# Application Lambda

# Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Lambda Function](#lambda-function)
- [Configuration](#configuration)
- [Tests](#tests)
- [Usage](#usage)
- [Functions](#functions)
- [Logging](#logging)
- [Error Handling](#error-handling)
- [Running Unit Tests](#running-unit-tests)
4. [CDK](#cdk)
- [Useful commands](#useful-commands)

This repository contains an application written in Python that performs the following operations on log files stored in Amazon S3:

1. Placeholder

The application is designed to be deployed as an AWS Lambda function and triggered by an event from an S3 bucket.

## Prerequisites

To run this application, ensure that you have the following prerequisites:

- Python 3.11.
- CDK 2.0 or above

## Installation

1. Clone this repository to your local machine.
2. Navigate to the repository's root directory.

# Lambda Function

## Tests

`python -m unittest discover -v -s "./app/test/" -p "test_*.py"`

## Usage

The application can be used by invoking the `handler` function. However, it is primarily intended to be deployed as an AWS Lambda function and triggered by an S3 event. When an S3 event occurs, the `handler` function is invoked with the appropriate event data.

## Logging

The application uses the Python `logging` module for logging. By default, logs are streamed to `sys.stdout` at the `DEBUG` level. You can modify the logging configuration as per your requirements.

## Error Handling

The application handles various exceptions and logs appropriate error messages. If an error occurs during the execution of any function, an error message will be logged, and the function will return `None` or `False` depending on the case.

# CDK

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
