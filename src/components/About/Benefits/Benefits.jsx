import React from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const possibilities = [
	{
		'icon':'a',
		'title': 'Analise',
		'text': 'Vivamus suscipit tortor eget felis porttitor volutpat. Cura bitur aliquet quam.'
	},
	{
		'icon':'b',
		'title': 'Preparing',
		'text': 'Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'c',
		'title': 'Working',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'d',
		'title': 'Finalyse',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'e',
		'title': 'Testing',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'f',
		'title': 'Deliver',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	}
]

const Benefits = (props) =>
	<div>
		<Breadcrumbs
			name={props.name}
			parentpath={props.parentpath}
			parentname={props.parentname}
		/>
		<div className='possibilitiesWrap'>
			<div className='pageTitle blockTitle'>Benefits</div>
			<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
			<div className='possibilities'>
				<div className='possibilities__items'>
					{
						possibilities.map( (possibility, i) =>
							<div key={i} className='possibilities__item'>
								<div className='possibilities__itemIcon'>&nbsp;{possibility.icon}</div>
								<div className='possibilities__itemTitle'>{possibility.title}</div>
								<div className='possibilities__itemText'>{possibility.text}</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	</div>


export default Benefits;
