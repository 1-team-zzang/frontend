export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0, 'never'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
}
