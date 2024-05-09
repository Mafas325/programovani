class Halda
{
    List<int> list = [];

    public void Add(int val)
    {
        list.Add(val);

        int index = list.Count - 1;
        int parentIndex = Parent(index);
        int parent = list[parentIndex];
        while (val>parent)
        {
            Swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Parent(index);
            parent = list[parentIndex];
        }
    }

    public int Remove()
    {
        list.RemoveAt(list.Count - 1);

        throw new Exception("schořřřřřř v pekleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    }


    int Parent(int index) => (index - 1) / 2;
    int Left(int parent) => parent * 2 + 1;
    int Right(int parent) => parent * 2 + 2;

    void Swap(int index, int parentIndex) => (list[index], list[parentIndex]) = (list[parentIndex], list[index]);
}