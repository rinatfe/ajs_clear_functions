import getHealth from "./index";

test('index test', () => {
    const result = getHealth({
        name: 'Маг',
        health: 90
    });
    expect(result).toBe('healthy');
});

test('index test', () => {
    const result = getHealth({
        name: 'Маг',
        health: 50
    });
    expect(result).toBe('wounded');
});

test('index test', () => {
    const result = getHealth({
        name: 'Маг',
        health: 49
    });
    expect(result).toBe('wounded');
});

test('index test', () => {
    const result = getHealth({
        name: 'Маг',
        health: 15
    });
    expect(result).toBe('critical');
});

test('index test', () => {
    const result = getHealth({
        name: 'Маг',
        health: 14
    });
    expect(result).toBe('critical');
});