class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLLabelElement;
	describeInputElement: HTMLLabelElement;
	peopleInputElement: HTMLLabelElement;

	constructor() {
		this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(this.templateElement.content, true);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = 'user-input';

		this.titleInputElement = this.element.querySelector('#tite')! as HTMLLabelElement;
		this.describeInputElement = this.element.querySelector('#description')! as HTMLLabelElement;
		this.peopleInputElement = this.element.querySelector('#people')! as HTMLLabelElement;

		this.attach();
	}

    // private configure(){

    // }

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjInput = new ProjectInput();
