module.exports = {
  extends: [
    'stylelint-config-standard-scss'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    // SCSS specific rules
    'scss/at-import-partial-extension': 'always',
    'scss/at-import-partial-extension-blacklist': ['.scss'],
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/percent-placeholder-pattern': '^[a-z][a-zA-Z0-9]+$',
    'scss/selector-no-redundant-nesting-selector': true,
    
    // General rules
    'at-rule-no-unknown': null,
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': false,
    'font-family-name-quotes': 'always-where-required',
    'function-url-quotes': 'always',
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9]+$',
    'length-zero-no-unit': true,
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-invalid-double-slash-comments': true,
    'number-max-precision': 4,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9-_]*$',
      {
        message: 'Class names should be kebab-case and start with a letter'
      }
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-no-vendor-prefix': true,
    
    // Custom rules for Ivory
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'indentation': 2,
    'linebreaks': 'unix',
    'max-line-length': 120,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-trailing-whitespace': true,
    'string-no-newline': true,
    
    // Allow important for utility classes
    'declaration-no-important': [
      true,
      {
        severity: 'warning'
      }
    ],
    
    // Allow vendor prefixes for better browser support
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'transform', 'transition', 'animation']
      }
    ],
    
    // Allow specific vendor prefixes
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['appearance', 'transform', 'transition', 'animation']
      }
    ]
  },
  ignoreFiles: [
    'dist/**/*',
    'node_modules/**/*'
  ]
}; 