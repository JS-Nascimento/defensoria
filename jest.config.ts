module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy",
        '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    }

};
