import arrow from '../assets/icons/arrow.png';

const TodoHero = () => {
  return (
    <section className='todo-hero-wrapper'>
        <div className='todo-hero-card-wrapper'>
            <div className='todo-hero-card todo-hero-presentation'>
                <div className='todo-hero-presentation-content'>
                    <div className='todo-hero-title-wrapper'>
                        <img src={arrow} alt="arrow-icon" />
                        <h2 className='todo-hero-title'>Welcome to redux-todo, you can make your day easier.</h2>
                    </div>
                    <p className='todo-hero-description'>This is my application created with redux, you can create the tasks you want and organize your day in a better way, I wish you good luck!</p>
                </div>
            </div>
            <div className='todo-hero-card todo-hero-animation'>
                <div className='todo-hero-animation-tasks'>
                    <div className='todo-hero-animation-item'>
                        <div className='todo-hero-animation-content'>
                            <div className="todo-hero-animation-cirlce"></div>
                            <p className='todo-hero-animation-title title1'></p>
                        </div>
                    </div>
                    <div className='todo-hero-animation-item'>
                        <div className='todo-hero-animation-content'>
                            <div className="todo-hero-animation-cirlce"></div>
                            <p className='todo-hero-animation-title title2'></p>
                        </div>
                    </div>  
                    <div className='todo-hero-animation-item'>
                        <div className='todo-hero-animation-content'>
                            <div className="todo-hero-animation-cirlce"></div>
                            <p className='todo-hero-animation-title title3'></p>
                        </div>
                    </div>
                </div>
                <h2 className='todo-hero-animation-description'>It is very easy, you have to put the title of your task, and its description, then you can see them in a preview.</h2>
            </div>
        </div>
        <span className='todo-hero-arrow'></span>
    </section>
  )
};

export default TodoHero;
