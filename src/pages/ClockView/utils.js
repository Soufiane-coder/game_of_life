
export const isAmPm = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours <= 12 ? { am: true, pm: false } : { pm: true, am: false };
}