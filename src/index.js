import './index.css';

const addComponent = () => {
  const basicApp = document.createElement('h2');
  basicApp.innerText = 'Basic App';
  basicApp.classList.add(['basic-app']);
  document.body.append(basicApp);
};

addComponent();
