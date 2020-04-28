import './index.css';

const addComponent = () => {
  const basicApp = document.createElement('h2');
  basicApp.innerText = [process.env.APP_NAME, process.env.NODE_ENV].join(' - ');
  basicApp.classList.add(['basic-app']);
  document.body.append(basicApp);
};

addComponent();
