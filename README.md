# to-do-app
TO-DO list - First Vanilla JS app

This is my first Vanilla JS Application. It's a simple to-do list, where you input text and create tasks, that you can then delete or mark as done.

Made using HTML5, CSS3 (Flexbox layout) and Vanilla JS. All graphics were made by me.

Plans for future releases:
- Make it PWA. (v1.6)
- Make an english version (v1.5),
- Add the option to remove only selected items from localStorage by clicking "x" button (in 1.4),
- ~~Add saving items to localStorage (v1.3).~~
- Minor layout fixes (someday).

v1.3
- Added saving your to-do items to the localStorage by clicking 'Zapisz" button,
- You can delete all items from localStorage by clicking "Wyczyść" button.
Known issues/bugs:
- In Firefox (currently using 52.0) the localStorage gets reversed keys - as far as I know there is no workaround, but I'll try to fix it somehow.

v1.2
- Added animations when a new "li" element is added to the list,
- Added animation when a list item is marked as done.

v1.1
- Fixed a bug where clicking "itemDone" li items from top to bottom changes class back to "item", but clicking from bottom to top leaves "i" with check symbol.

v1.0:
- Working script that adds new items to the list with button click or "enter" keydown,
- Wotking script that clears all items from the list,
- Working script that changes class from "item" to "itemDone" and back on click,
- Working script that deletes item when "x" is clicked,
- Basic responsive css - Flexbox.
Known issues/bugs:
- clicking "itemDone" li items from top to bottom changes class back to "item", but clicking from bottom to top leaves check icon.

Live: https://michalgrochowski.github.io/to-do/. 

License: MIT.
