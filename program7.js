
    module.exports =function getAverage(...args){
        let average = args.reduce((x,y)=>x + y) / args.length
        return average
    }