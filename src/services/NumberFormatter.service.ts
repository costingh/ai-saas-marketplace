class NumberFormatter {
    static formatNumber(num: number): string {
        if (!num) return num.toString();
        if (num >= 1000) {
            const suffixes = ["", "k", "M", "G", "T"];
            const magnitude = Math.floor(Math.log10(num) / 3);
            const roundedNum = (num / Math.pow(1000, magnitude)).toFixed(1);
            return `${roundedNum}${suffixes[magnitude]}`;
        }
        return num.toString();
    }
}

export default NumberFormatter;
