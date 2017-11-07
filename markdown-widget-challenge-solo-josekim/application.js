class MarkdownWidget {
  constructor(source,view){
    this.$source = $(source)
    this.data = this.transform(this.$source.val())
    this.$view = $(view)
  }

  replacer(text,type){
    let newText = text
    while (newText.match(type.regex) != null){
      newText = newText.replace(type.regex,function(x){
        return `<${type.tags}>${x.substr(type.length,x.length-(2*type.length))}</${type.tags}>`
        })
    }
    return newText
  }

  transform(text){
    let newText = text
    let markdowns = [
    {regex:/(\*\*\S)(.*?)(\S\*\*)/,tags:"strong",length:2},
    {regex:/(\*\S)(.*?)(\S\*)/,tags:"em",length:1},
    {regex:/(\_\S)(.*?)?(\S\_)/,tags:"em",length:1}]
    for(let i = 0; i < markdowns.length; i++){
      newText = this.replacer(newText,markdowns[i])
    }
    return newText
  }

  view (){
    this.$view.html(`<p> ${this.data} </p>`)
  }
  controller(){
    let widget = this
    widget.$source.on("keyup",function(event){
      let inputText = $(widget.$source).val()
      widget.data = widget.transform(inputText)
      myWidget.view()
    });
  }
}


$( document ).ready(function() {
    myWidget = new MarkdownWidget(".form-control","#preview")
    myWidget.controller()
});

//<p><em>This line rendered as italicized text.</em></p>
//<p><strong>This line rendered as bold text.</strong></p>
//<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
