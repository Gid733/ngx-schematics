export interface <%= classify(name) %>Models {
    total: number;
    entities: <%= classify(name) %>Model[];
}

export interface <%= classify(name) %>Model {<% for (let field of model.fields) { %>
    <%=field.name%>: <%=field.type%>;<% } %>
}
