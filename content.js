const container = document.getElementById('container');

function render() {
	const local = JSON.parse(localStorage.getItem('books'));

	local.map((item) => {
		const newDiv = document.createElement('div');
		newDiv.className = 'book-item';
		newDiv.id = item.id;

		const newSpan1 = document.createElement('span');
		newSpan1.className = 'bold';
		newSpan1.textContent = `Author: ${item.author}  `;

		const newSpan2 = document.createElement('span');
		newSpan2.className = 'bold';
		newSpan2.innerHTML = `Title: ${item.title} `;

		const newSpan3 = document.createElement('span');
		newSpan3.className = 'bold';
		newSpan3.innerHTML = `Pages: ${item.pages} `;

		const status = document.createElement('div');
		status.className = 'status-wrapper';

		const check = document.createElement('INPUT');
		check.setAttribute('type', 'checkbox');
		if (item.read === true) {
			check.setAttribute('checked', true);
		}
		check.className = 'status';
		check.id = 'status';
		check.name = 'status';

		const label = document.createElement('LABEL');
		label.textContent = 'Read   ';

		status.appendChild(check);
		status.appendChild(label);

		const remove = document.createElement('BUTTON');
		remove.className = 'remove-button btn btn-primary';
		remove.textContent = 'Remove';

		newDiv.appendChild(newSpan1);
		newDiv.appendChild(newSpan2);
		newDiv.appendChild(newSpan3);
		newDiv.appendChild(status);
		newDiv.appendChild(remove);

		container.appendChild(newDiv);
		return container;
	});
}
const addBook = document.getElementById('addBook');
const form = document.querySelector('.hidden');
const add = document.getElementById('add');

export { render, add, addBook, form };
