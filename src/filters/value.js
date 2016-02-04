export default function name(value) {
  'use strict';
  return (node) => ({ok: value === node});
};
