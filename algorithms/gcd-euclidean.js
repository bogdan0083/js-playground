import { test } from "uvu";
import * as assert from 'uvu/assert'

// Find Greatest Common Divisor using the euclidean algorithm
// @see https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

const gcd = (a, b) => {
	if (a === 0) {
		return b;
	}

	if (b === 0) {
		return a;
	}

	const remainder = a % b;

	return gcd(b, remainder);
}

test("gcd", () => {
  // @TODO: Add more assertions
  assert.equal(gcd(270, 192), 6);
  assert.equal(gcd(192, 270), 6);
});

test.run();