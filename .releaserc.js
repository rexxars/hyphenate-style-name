// @ts-check
/* eslint-disable no-template-curly-in-string */

const preset = 'conventionalcommits'

/**
 * @type {import('semantic-release').Options}
 **/
const options = {
  plugins: [
    ['@semantic-release/commit-analyzer', {preset}],
    ['@semantic-release/release-notes-generator', {preset}],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: `<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.`,
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npx -y prettier --write CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        tarballDir: '.semantic-release',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'LICENSE',
          'package-lock.json',
          'package.json',
          'pnpm-lock.yaml',
          'yarn.lock',
        ],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    [
      '@semantic-release/github',
      {
        addReleases: 'bottom',
        assets: '.semantic-release/*.tgz',
      },
    ],
  ],
}

module.exports = options
