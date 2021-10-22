package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
@SpringBootTest
class UpdateQuestionUseCaseTest {
        @SpyBean
        private UpdateQuestionUseCase updateQuestionUseCase;

        @MockBean
        private QuestionRepository repository;

        @Test
        void updateTest () {

            var questionDTO = new QuestionDTO("id1", "id2", "Que dia es hoy?", "matematica",
                    "Matematica", "url", "Yhomira");

            var question = new Question();
            question.setId("id1");
            question.setUserId("id2");
            question.setQuestion("Que dia es hoy?");
            question.setType("tecnologia");
            question.setCategory("TECNOLOGIA");
            question.setUrl("url");
            question.setNombre("Yhomira");
            when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));
            var result = updateQuestionUseCase.apply(questionDTO);
            Assertions.assertEquals(question.getId(),result.block().getId());
        }
}
