

const getSuffix = (fileName) => {
	let start = file.originalname.lastIndexOf('.') + 1
	let end = file.originalname.length
	let suffix = file.originalname.substring(start,end)
	return suffix
}

exports.getSuffix = getSuffix
