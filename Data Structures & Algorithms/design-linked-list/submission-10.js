class MyLinkedList {
    length
    head
    tail

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        const item = this.getNode(index)

        if (item) {
            return item.prev
        }
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const item = this.getNode(index)

        if (item) {
            return item.value
        }

        return -1
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getNode(index) {
        let i = 0
        let current = this.head

        while (current && i <= index) {
            if (i === index) {
                return current
            }

            current = current.next
            i++
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newItem = {
            value: val
        }

        if (this.length) {
            newItem.next = this.head
            this.head.prev = newItem
        } else {
            this.tail = newItem
        }

        this.head = newItem
        this.length++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newItem = {
            value: val
        }

        if (this.length) {
            newItem.prev = this.tail
            this.tail.next = newItem
        } else {
            this.head = newItem
        }

        this.tail = newItem
        this.length++
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val)
        } else if (index === this.length) {
            this.addAtTail(val)
        } else if (index < this.length) {
            const item = this.getNode(index)
            const newItem = {
                value: val,
                next: item,
                prev: item.prev
            }

            item.prev.next = newItem
            item.prev = newItem

            this.length++
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < this.length) {
            const item = this.getNode(index)

            if (item.prev) {
                item.prev.next = item.next
            } else {
                this.head = item.next
            }

            if (item.next) {
                item.next.prev = item.prev
            } else {
                this.tail = item.prev
            }

            this.length--
        }
    }
}
