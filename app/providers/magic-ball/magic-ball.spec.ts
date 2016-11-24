import {beforeEachProviders, beforeEach, it, describe, expect, inject, injectAsync} from '@angular/core/testing';
import {MagicBall} from './magic-ball';
 
describe('Magic 8 Ball Service', () => {
 
    beforeEachProviders(() => [MagicBall]);
 
    it('should return a non empty array', inject([MagicBall], (magicBall) => {
 
            let result = magicBall.getAnswers();
 
            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    ));
 
    /**it('should return one random answer as a string', inject([MagicBall], (magicBall) => {
            expect(typeof magicBall.getRandomAnswer()).toBe('string');
        }
    ));
 
    it('should have both yes and no available in result set', inject([MagicBall], (magicBall) => {
 
            let result = magicBall.getAnswers();
 
            expect(result).toContain('Yes');
            expect(result).toContain('No');
 
        }
    ));*/
 
});