export class StorageManager {
    static getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    }

    static setItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
}
