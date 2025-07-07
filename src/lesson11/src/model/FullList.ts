import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void, 
    save(): void, 
    clearList(): void, 
    addItem(itemObj: ListItem): void
    removeItem(id: string): void 
}

export default class FullList implements List{

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[]{
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        //If storedList is not a string return.
        if (typeof storedList !== "string") return

        //storedList is parsed from JSON to an array of objects.
        const parsedList: {_id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        //For each object in parsedList create a new ListItem and use the static instance to add 'newListItem' to FullList.
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
         })
    }

    //Sets the list to JSON and saves it to local storage as "myList"
    save(): void{
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    //Sets list as empty array and saves to local storage 
    clearList(): void {
        this._list = []
        this.save()
    }

    //Pushes passed in argument to list array and then saves the updated list to local storage
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    //Removes passed in argument from the list array using filter and then saves the updated list to local storage
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}