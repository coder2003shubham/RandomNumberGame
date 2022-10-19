//mine
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n ;
    cin>>n;
    vector<int> a(n , 0);
    for(int i =0;i<n;i++)
    cin>>a[i];
    sort(a.begin() , a.end());
    int ans ;
    if(n%2 == 0)
    ans = (n/2)+1;
    else ans = n/2;

    cout<<a[ans]<<endl;
    
}
