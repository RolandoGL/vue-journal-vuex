export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString,
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe omnis provident quo ullam quis eos aliquid, ab officia obcaecati est accusamus eveniet adipisci mollitia? Perspiciatis quos similique iusto. Explicabo.',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString,
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe omnis provident quo ullam quis eos aliquid, ab officia obcaecati est accusamus eveniet adipisci mollitia? Perspiciatis quos similique iusto. Explicabo.',
            picture: null
        }
    ],
})