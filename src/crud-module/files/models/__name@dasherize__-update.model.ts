export interface <%= classify(name) %>UpdateModel {<% for (let field of model.fields) { %>
    <%=field.name%>: <%=field.type%>;<% } %>
}
