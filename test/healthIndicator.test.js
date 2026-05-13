import { getHealthStatus } from "../src/healthIndicator";

test('should return "healthy" when health is greater than 50', () => {
    expect(getHealthStatus({name: 'Маг', health: 90})).toBe('healthy');
});

test('should return "wounded" when health is between 15 and 50 inclusive', () => {
    expect(getHealthStatus({name: 'Маг', health: 50})).toBe('wounded');
});

test('should return "critical" when health is less than 15', () => {
    expect(getHealthStatus({name: 'Маг', health: 14})).toBe('critical');
});