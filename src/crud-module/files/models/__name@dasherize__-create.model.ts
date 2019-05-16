export interface <%= classify(name) %>CreateModel {<% for (let field of model.fields) { %>
    <%=field.name%>: <%=field.type%>;<% } %>
}

