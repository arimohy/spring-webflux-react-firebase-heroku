package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class DeleteUseCaseTest {
    @MockBean
    private AnswerRepository answerRepository;
    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    DeleteUseCase deleteQuestionUseCase;


    @Test
    public void delete(){

        var answerDTO = new AnswerDTO("id1","id2","user1","answer1","url","yhomira");
        var answer = new AnswerDTO();
        answer.setId("id1");
        answer.setQuestionId("id2");
        answer.setUserId("user1");
        answer.setAnswer("answer1");
        answer.setUrl("url");
        answer.setNombre("yhomira");

        Mockito.when(questionRepository.deleteById("id2")).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId("id2")).thenReturn(Mono.empty());

        var result = deleteQuestionUseCase.apply("id2").block();

        Assertions.assertEquals(result,null);
    }

}