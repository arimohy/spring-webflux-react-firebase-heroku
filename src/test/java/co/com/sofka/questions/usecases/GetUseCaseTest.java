package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import static org.mockito.Mockito.*;
@RunWith(MockitoJUnitRunner.class)
class GetUseCaseTest {
    GetUseCase getUseCase;
    QuestionRepository questionRepository;
    AnswerRepository answerRepository;
    MapperUtils mapperUtils;
    @BeforeEach
    public void setup(){
        mapperUtils = new MapperUtils();
        questionRepository = mock(QuestionRepository.class);
        answerRepository = mock(AnswerRepository.class);
        getUseCase = new GetUseCase(mapperUtils,questionRepository,answerRepository);
    }
    @Test
    @DisplayName("Test para obtener una pregunta un usuario de manera correcta")
    void getQuestionSuccessTest() {
        var question = new Question();
        question.setId("id1");
        question.setUserId("xxxx-xxxx");
        question.setType("tech");
        question.setCategory("software");
        question.setQuestion("¿Que es java?");

        var answer = new Answer();
        answer.setId("id1");
        answer.setUserId("xxxx-xxxx");
        answer.setQuestionId("Q-111");
        answer.setPosition(1);
        answer.setAnswer("es un lenguaje de programación");

        when(questionRepository.findById(question.getId())).thenReturn(Mono.just(question));
        when(answerRepository.findAllByQuestionId(question.getId())).thenReturn(Flux.just(answer));

        StepVerifier.create(getUseCase.apply(question.getId())).expectNextMatches(
                questionDTO1 -> {
                    assert questionDTO1.getId().equals("id1");
                    assert questionDTO1.getUserId().equals("xxxx-xxxx");
                    assert questionDTO1.getCategory().equals("software");
                    assert questionDTO1.getQuestion().equals("¿Que es java?");
                    assert questionDTO1.getType().equals("tech");
                    return true;
                }
        ).verifyComplete();

        verify(questionRepository).findById(question.getId());
        verify(answerRepository).findAllByQuestionId(question.getId());
    }
}