# TodoList

## 프로젝트 소개 및 목적

- To Do List 프로그램을 작성하여 할 일 목록들을 관리한다.

## 사용 방법

- Add 부분

1. input창에 해야할일을 입력하고 Add버튼(Enter키)을 누르면 ToDo 섹션에 추가된다.

![JS_AddTodo](https://github.com/DataCodeLiteracy/TodoList/assets/103319477/7889a6cb-c8f8-43ba-b6de-3721411e1a9b)

- ToDo, Completed 부분

1. v표시를 체크해서 ToDo 와 Completed 섹션을 오고갈 수 있다.
2. 연필아이콘을 클릭해서 수정할 수 있다.

![JS_Edit_Complete](https://github.com/DataCodeLiteracy/TodoList/assets/103319477/c844ddc4-333c-4cf6-b1e2-8627d181391c)

3. x표시 버튼을 클릭해서 삭제할 수 있다.

![JS_Delete](https://github.com/DataCodeLiteracy/TodoList/assets/103319477/e8a44d8c-c36b-4999-8e23-2beda3c56b96)

## 기술적 요구사항

- Add 부분

1. input창이 비어있으면 추가되지 않는다. (alert창 띄우기)

- ToDo, Completed 부분

1. v표시를 체크하면 ToDo에서 Completed로 이동하면서 중간 가로줄이 그어지고 Completed에서는 Todo로 이동하면서 중간 가로줄이 없어진다.
2. 연필아이콘을 클릭(텍스트부분을 더블클릭)하면 label태그가 없어지고 input태그로 나타나면서 input태그에 focus가 발생한다.
3. input 태그에 focus 발생후 Enter키를 입력하면 수정이 완료된다.
4. x표시 버튼을 클릭하면 Todo 섹션에 있든 Completed 섹션에 있든 그 즉시 삭제된다.
