/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<8c1491751a56c21d043d0a431f86d2cb>>
 */

mod deduped_json_codegen;

use deduped_json_codegen::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn kitchen_sink() {
    let input = include_str!("deduped_json_codegen/fixtures/kitchen-sink.graphql");
    let expected = include_str!("deduped_json_codegen/fixtures/kitchen-sink.expected");
    test_fixture(transform_fixture, "kitchen-sink.graphql", "deduped_json_codegen/fixtures/kitchen-sink.expected", input, expected);
}

#[test]
fn stable_literals() {
    let input = include_str!("deduped_json_codegen/fixtures/stable-literals.graphql");
    let expected = include_str!("deduped_json_codegen/fixtures/stable-literals.expected");
    test_fixture(transform_fixture, "stable-literals.graphql", "deduped_json_codegen/fixtures/stable-literals.expected", input, expected);
}

#[test]
fn stable_literals_duplicates() {
    let input = include_str!("deduped_json_codegen/fixtures/stable-literals-duplicates.graphql");
    let expected = include_str!("deduped_json_codegen/fixtures/stable-literals-duplicates.expected");
    test_fixture(transform_fixture, "stable-literals-duplicates.graphql", "deduped_json_codegen/fixtures/stable-literals-duplicates.expected", input, expected);
}
