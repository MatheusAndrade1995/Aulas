-- 1 Nome e ano dos filmes
SELECT Nome, Ano from Filmes

-- 2 Nome e ano dos filmes em ordem crescente por ano
SELECT Nome, Ano, Duracao from Filmes ORDER BY Ano

-- 3 Buscar pelo filme de volta para o futuro, trazendo o nome, ano e a duração
SELECT Nome, Ano, Duracao from Filmes WHERE Nome = 'De volta para o futuro'

-- 4 Buscar os filmes lançados em 1997
SELECT * from Filmes WHERE Ano = 1997

-- 5 Buscar os filmes lançados APÓS o ano 2000
 SELECT * FROM Filmes WHERE Ano LIKE '2%'

-- 6 Buscar os filmes com a duracao maior que 100 e menor que 150, ordenando pela duracao em ordem crescente
SELECT * from Filmes WHERE Duracao >= 100 AND Duracao <= 150 ORDER BY Duracao 

-- 7 Buscar a quantidade de filmes lançadas no ano, agrupando por ano, ordenando pela duracao em ordem decrescente
SELECT Ano, count (Ano) Quantidade from Filmes GROUP BY Ano ORDER BY Quantidade DESC --ordenando por quantidade conforme a imagem do desafio
SELECT Ano, count (Ano) Quantidade, SUM(duracao) TempoTotal from Filmes GROUP BY Ano Order by TempoTotal desc --ordenando por quantidade conforme enunciado do desafio incluindo por conta própria a coluna de tempoTotal

-- 8 Buscar os Atores do gênero masculino, retornando o PrimeiroNome, UltimoNome
SELECT PrimeiroNome, UltimoNome, Genero from Atores WHERE Genero = 'M'

-- 9 Buscar os Atores do gênero feminino, retornando o PrimeiroNome, UltimoNome, e ordenando pelo PrimeiroNome
SELECT PrimeiroNome, UltimoNome, Genero FROM Atores WHERE Genero = 'F' ORDER BY PrimeiroNome

-- 10 Buscar o nome do filme e o gênero
SELECT F.Nome, G.Genero FROM Filmes as F INNER JOIN FilmesGenero FG ON F.id = FG.idFilme INNER JOIN Generos as G ON G.id = FG.idGenero ORDER BY G.Genero

-- 11 Buscar o nome do filme e o gênero do tipo "Mistério"
SELECT F.Nome, G.Genero FROM Filmes as F INNER JOIN FilmesGenero FG ON F.id = FG.idFilme INNER JOIN Generos as G ON G.id = FG.idGenero WHERE G.Genero = 'Mistério'

-- 12 Buscar o nome do filme e os atores, trazendo o PrimeiroNome, UltimoNome e seu Papel
SELECT F.Nome, A.PrimeiroNome, A.UltimoNome, EF.Papel  
FROM Filmes as F 
INNER JOIN ElencoFilme as EF 
ON F.id = EF.idFilme 
INNER JOIN Atores as A 
ON A.id = EF.IdAtor 



Select * from FilmesGenero
Select * from Filmes
Select * from Generos
Select * from Atores
Select * from ElencoFilme