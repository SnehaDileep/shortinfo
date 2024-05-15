import './styles.scss';

//The PageHeaderContent component takes in two props headerText and icon.
const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};


export default PageHeaderContent;
