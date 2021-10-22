package co.com.sofka.questions.usecases;

import co.com.sofka.questions.reposioties.AnswerRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteAnswerUseCaseTest {
    @SpyBean
    private DeleteAnswerUseCase deleteAnswerUseCase;

    @MockBean
    private AnswerRepository answerRepository;

    @Test
    @DisplayName("test para eliminar una respuesta")
    void deleteAnswerSucessTest(){
        Mockito.when( answerRepository.deleteById("A-111")).thenReturn(Mono.empty());

        var result = deleteAnswerUseCase.apply("A-111").block();
        assertNull(result);
    }
}