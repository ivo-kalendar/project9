import React from 'react'

const seasonConfig = {
	winter: { result: 'Брр Надвор е Ладно.', iconName: 'snowflake' },
	summer: { result: 'Идеме на Плажа!', iconName: 'sun' }
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter' 
	return lat > 0 ? 'winter' : 'summer'
}

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth())
	const { result, iconName } = seasonConfig[season]

	return (
		<div className={`container alert ${season}`}>
			<i className={`icon-left huge ${iconName} icon`} />
			<h1 className="result">{result}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	)
}

export default SeasonDisplay