import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class Task extends Component {

	componentDidMount() {
		gapi.plus.go()
	}

	handleClickSubtask(taskId, subtaskIndex, done){
		this.props.pageActions.toggleTask(taskId, subtaskIndex, done)
	};

	handleClickShareFacebook(){

	}
	render() {
		const props = this.props;
		//find the index of current task
		const taskIndex = props.tasks.findIndex((task) => task.id === props.match.params.taskId.slice(1));
		const currentTask = props.tasks[taskIndex];

		return (
			<div className='cabinet'>
				<div className='task__progress' style={{'width':currentTask.progress}} ></div>
				<div className='task__title'>{currentTask.title}</div>
				<div className='task__subtitle'>List of subtasks:</div>
				<div className='subtask__items'>
					{
						currentTask.subtasks.map( (subtask,i) =>
							<Checkbox
								key={i}
								className='subtask__item'
								label={subtask.title}
								defaultChecked={subtask.done}
								disabled={
									currentTask.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`
									? false
									: true
								}
								onCheck={this.handleClickSubtask.bind(this, currentTask.id, i, subtask.done)}
							/>
						)
					}
				</div>
				{
					currentTask.progress == '100%' && currentTask.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`
					?
					<div className='taskShare'>
						<div className='taskShare__title'>Share in social networks:</div>
						<ul className='taskShare__items'>
							<li className='taskShare__item taskShare__item_twitter'>
								<a className="twitter-share-button"
									href="https://twitter.com/intent/tweet?text=Hello%20world"
									data-size="large"
								></a>
							</li>
							<li className='taskShare__item taskShare__item_google'>
								<div className="g-plus" data-height="60" data-action="share" data-annotation="none" data-href="https://github.com/pikapoool/myproject"></div>
							</li>
							<li className='taskShare__item taskShare__item_facebook'>
								<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fgithub.com%2Fpikapoool%2Fmyproject&layout=button&size=large&mobile_iframe=true&appId=152907755271937&width=59&height=20" width="59" height="20" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
							</li>
						</ul>
					</div>
					: null
				}
			</div>
		);
	}
}
