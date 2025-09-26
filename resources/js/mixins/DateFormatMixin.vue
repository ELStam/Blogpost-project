<script>
export default {
    name: "DateFormatMixin",

    methods: {
        /**
         * Checks if the given date is today.
         *
         * @param {Date} date
         *
         * @returns {boolean}
         */
        isToday(date) {
            const inputDate = new Date(date)
            const today = new Date()
            return inputDate.getDay() === today.getDay() &&
                inputDate.getMonth() === today.getMonth() &&
                inputDate.getFullYear() === today.getFullYear()
        },

        /**
         * Formats the time to the 'nl-NL' locale.
         *
         * @param {Date} date
         * @returns {string}
         */
        formatAsTime(date) {
            return new Date(date).toLocaleTimeString('nl-NL', {
                hour: '2-digit',
                minute: '2-digit',
            })
        },

        /**
         * Formats the date to the 'nl-NL' locale.
         *
         * @param {Date} date
         * @returns {string}
         */
        formatAsDate(date) {
            return new Date(date).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            })
        },

        /**
         * Returns a formatted string depending on whether the date is today.
         *
         * If the date is today, it returns the time.
         * If the date is not today, then it returns the date
         *
         * @param {Date} date
         * @returns {string}
         */
        dateFormat(date) {
            return this.isToday(date)
                ? this.formatAsTime(date)
                : this.formatAsDate(date)
        }
    }
}
</script>
